import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h2>{TodayDeceased}</h2>
      <h3>{TotDeceased}</h3>
    </div>
  );
}

export default Deceased;
