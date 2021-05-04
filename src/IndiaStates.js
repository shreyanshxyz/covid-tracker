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
        <option value={4}>Andhra Pradesh</option>
        <option value={4}>Tamil Nadu</option>
        <option value={4}>Delhi</option>
        <option value={4}>Uttar Pradesh</option>
        <option value={4}>West Bengal</option>
        <option value={4}>Odisha</option>
        <option value={4}>Rajasthan</option>
        <option value={4}>Chhattisgarh</option>
        <option value={4}>Telangana</option>
        <option value={4}>Haryana</option>
        <option value={4}>Gujarat</option>
        <option value={4}>Bihar</option>
        <option value={4}>Madhya Pradesh</option>
        <option value={4}>Assam</option>
        <option value={4}>Punjab</option>
        <option value={4}>Jammu and Kashmir</option>
        <option value={4}>Jharkhand</option>
        <option value={4}>Uttarakhand</option>
        <option value={4}>Himachal Pradesh</option>
        <option value={4}>Goa</option>
        <option value={4}>Puducherry</option>
        <option value={4}>Tripura</option>
        <option value={4}>Manipur</option>
        <option value={4}>Chandigarh</option>
        <option value={4}>Arunachal Pradesh</option>
        <option value={4}>Meghalaya</option>
        <option value={4}>Nagaland</option>
        <option value={4}>Ladakh</option>
        <option value={4}>Sikkim</option>
        <option value={4}>Andaman and Nicobar Islands</option>
        <option value={4}>Mizoram</option>
        <option value={4}>Dadra and Nagar Haveli and Daman and Diu</option>
        <option value={4}>Lakshadweep</option>
        <option value={4}>State Unassigned</option>
      </select>
    </div>
  );
}

export default IndiaStates;
