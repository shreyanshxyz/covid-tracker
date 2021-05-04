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
        <option value="none" selected disabled hidden>
          Select A State
        </option>
        <option value={0}>Total</option>
        <option value={1}>Maharashtra</option>
        <option value={2}>Kerala</option>
        <option value={3}>Karnataka</option>
        <option>Andhra Pradesh</option>
        <option>Tamil Nadu</option>
        <option>Delhi</option>
        <option>Uttar Pradesh</option>
        <option>West Bengal</option>
        <option>Odisha</option>
        <option>Rajasthan</option>
        <option>Chhattisgarh</option>
        <option>Telangana</option>
        <option>Haryana</option>
        <option>Gujarat</option>
        <option>Bihar</option>
        <option>Madhya Pradesh</option>
        <option>Assam</option>
        <option>Punjab</option>
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
