import React, { useState } from "react";
import axios from "axios";
import "./IndiaStates.css";

function IndiaStates() {
  const apiCall = "https://api.covid19india.org/data.json";

  // CONFIRMED CASES STATES
  const [Confirmed, setConfirmed] = useState([]);
  const [DailyConfirmed, setDailyConfirmed] = useState([]);

  // ACTIVE CASES STATEAS
  const [Active, setActive] = useState([]);

  // RECOVERED CASES STATES
  const [DailyRecovered, setDailyRecovered] = useState([]);
  const [Recovered, setRecovered] = useState([]);

  // DEATHS CASES STATES
  const [DailyDeaths, setDailyDeaths] = useState([]);
  const [Deaths, setDeaths] = useState([]);

  // LAST UPDATED
  const [LastUpdated, setLastUpdated] = useState();

  const stateAssign = (e) => {
    axios.get(apiCall).then((res) => {
      console.log(res.data.statewise);

      // Confirmed
      setDailyConfirmed(res.data.statewise[e.target.value].deltaconfirmed);
      setConfirmed(res.data.statewise[e.target.value].confirmed);

      // Active
      setActive(res.data.statewise[e.target.value].active);

      // Recovered
      setDailyRecovered(res.data.statewise[e.target.value].deltarecovered);
      setRecovered(res.data.statewise[e.target.value].recovered);

      // Deaths
      setDailyDeaths(res.data.statewise[e.target.value].deltadeaths);
      setDeaths(res.data.statewise[e.target.value].deaths);

      // Updated
      setLastUpdated(res.data.statewise[e.target.value].lastupdatedtime);
    });
  };

  return (
    <div className="card__graph">
      <div className="drop__cards">
        <div className="dropdown__div">
          <select className="drop__original" onChange={stateAssign}>
            <option value="none" selected disabled hidden>
              Select A State
            </option>
            <option value={0}>Total</option>
            <option value={1}>Maharashtra</option>
            <option value={2}>Kerala</option>
            <option value={3}>Karnataka</option>
            <option value={4}>Andhra Pradesh</option>
            <option value={5}>Tamil Nadu</option>
            <option value={6}>Delhi</option>
            <option value={7}>Uttar Pradesh</option>
            <option value={8}>West Bengal</option>
            <option value={9}>Odisha</option>
            <option value={10}>Rajasthan</option>
            <option value={11}>Chhattisgarh</option>
            <option value={12}>Telangana</option>
            <option value={13}>Haryana</option>
            <option value={14}>Gujarat</option>
            <option value={15}>Bihar</option>
            <option value={16}>Madhya Pradesh</option>
            <option value={17}>Assam</option>
            <option value={18}>Punjab</option>
            <option value={19}>Jammu and Kashmir</option>
            <option value={20}>Jharkhand</option>
            <option value={21}>Uttarakhand</option>
            <option value={22}>Himachal Pradesh</option>
            <option value={23}>Goa</option>
            <option value={24}>Puducherry</option>
            <option value={25}>Tripura</option>
            <option value={26}>Manipur</option>
            <option value={27}>Chandigarh</option>
            <option value={28}>Arunachal Pradesh</option>
            <option value={29}>Meghalaya</option>
            <option value={30}>Nagaland</option>
            <option value={31}>Ladakh</option>
            <option value={32}>Sikkim</option>
            <option value={33}>Andaman and Nicobar Islands</option>
            <option value={34}>Mizoram</option>
            <option value={35}>Dadra and Nagar Haveli and Daman and Diu</option>
            <option value={36}>Lakshadweep</option>
          </select>
        </div>

        <div className="casesdropdown__cards">
          <div className="row1">
            <div className="confirmed__card">
              <p>Confirmed</p>
              <h4>+ {DailyConfirmed}</h4>
              <h3>{Confirmed}</h3>
            </div>

            <div className="active__card">
              <p>Active</p>
              <h3>{Active}</h3>
            </div>
          </div>

          <div className="row2">
            <div className="recovered__card">
              <p>Recovered</p>
              <h4>+ {DailyRecovered}</h4>
              <h3>{Recovered}</h3>
            </div>

            <div className="deaths__card">
              <p>Deaths</p>
              <h4>+ {DailyDeaths}</h4>
              <h3>{Deaths}</h3>
            </div>
          </div>
          <div className="row3">
            <h4 className="last__update">Last Updated: {LastUpdated}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndiaStates;
