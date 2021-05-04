import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IndiaStates.css";

function IndiaStates() {
  const apiCall = "https://api.covid19india.org/data.json";
  const [States, setStates] = useState([]);

  useEffect(() => {
    axios
      .get(apiCall)
      .then((res) => {
        console.log(res.data.statewise);
        setStates(res.data.statewise);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="state__dropdown">
      <select className="drop__original">
        <option>Total</option>
        <option>Maharashtra</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>State 0</option>
        <option>Jammu and Kashmir</option>
        <option>Jharkhand</option>
        <option>Uttarakhand</option>
        <option>Himachal Pradesh</option>
        <option>Goa</option>
        <option>Puducherry</option>
        <option>Tripura</option>
        <option>Manipur</option>
        <option>Chandigarh</option>
        <option>Arunachal Pradesh</option>
        <option>Meghalaya</option>
        <option>Nagaland</option>
        <option>Ladakh</option>
        <option>Sikkim</option>
        <option>Andaman and Nicobar Islands</option>
        <option>Mizoram</option>
        <option>Dadra and Nagar Haveli and Daman and Diu</option>
        <option>Lakshadweep</option>
        <option>State Unassigned</option>
      </select>
    </div>
  );
}

export default IndiaStates;
