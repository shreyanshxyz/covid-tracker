import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      <h3>{TodayRecovered}</h3>
      <h2>{TotRecovered}</h2>
    </div>
  );
}

export default Recovered;
