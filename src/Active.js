import axios from "axios";
import React, { useEffect, useState } from "react";

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
    async function getData() {
      const caseRes = await axios.get(apiCall);

      const recent = caseRes.data.cases_time_series.length - 1;

      //   Deceased Cases
      setTotDeceased(caseRes.data.cases_time_series[recent].totaldeceased);

      //   Confirmed Cases
      setTotConfirmed(caseRes.data.cases_time_series[recent].totalconfirmed);

      //   Recovered Cases
      setTotRecovered(caseRes.data.cases_time_series[recent].totalrecovered);

      setTotActive(TotConfirmed - TotDeceased - TotRecovered);
    }
    getData();
    console.log(getData);
  });
  return (
    <div>
      <h1>{TotActive}</h1>
    </div>
  );
}

export default Active;
