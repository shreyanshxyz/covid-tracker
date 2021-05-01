import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Deceased.css";

function Deceased() {
  const apiCall = "https://api.covid19india.org/data.json";

  //   Deceased Cases
  const [TotDeceased, setTotDeceased] = useState();
  const [TodayDeceased, setTodayDeceased] = useState();

  useEffect(() => {
    async function getData() {
      const caseRes = await axios.get(apiCall);

      const recent = caseRes.data.cases_time_series.length - 1;
      setTotDeceased(caseRes.data.cases_time_series[recent].totaldeceased);
      setTodayDeceased(caseRes.data.cases_time_series[recent].dailydeceased);
    }

    getData();
    console.log(getData);
  });
  return (
    <div className="deceased__container">
      <h5>Deceased</h5>
      <h4>+ {TodayDeceased}</h4>
      <h2>{TotDeceased}</h2>
    </div>
  );
}

export default Deceased;
