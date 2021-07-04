import React, { useState } from "react";
import axios from "axios";
import "./IndiaStates.css";
import { Bar } from "react-chartjs-2";

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
  const [stateData, setstateData] = useState();

  const stateAssign = (e) => {
    document.getElementById("toggle").style.display = "block";
    document.getElementById("toggle1").style.display = "block";

    axios.get(apiCall).then((res) => {
      setstateData({
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "Confirmed",
            data: [
              // confCase[e.target.value],
              res.data.statewise[e.target.value].confirmed,
              res.data.statewise[e.target.value].recovered,
              res.data.statewise[e.target.value].deaths,
            ],
            backgroundColor: ["#ff073a", "limegreen", "gray"],
            borderWidth: 4,
            fill: true,
          },
        ],
      });

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
    <div className="dropdown__barandstates">
      <div className="dropdown__div">
        <select className="drop__original" onChange={stateAssign}>
          <option value="none" selected disabled hidden>
            Select A State
          </option>
          <option value={0}>Total</option>
          <option value={1}>Andaman and Nicobar Islands</option>
          <option value={2}>Andhra Pradesh</option>
          <option value={3}>Arunachal Pradesh</option>
          <option value={4}>Assam</option>
          <option value={5}>Bihar</option>
          <option value={6}>Chandigarh</option>
          <option value={7}>Chhattisgarh</option>
          <option value={8}>Goa</option>
          <option value={9}>Gujarat</option>
          <option value={10}>Haryana</option>
          <option value={11}>Himachal Pradesh</option>
          <option value={12}>Dadra and Nagar Haveli and Daman and Diu</option>
          <option value={13}>Delhi</option>
          <option value={14}>Jammu and Kashmir</option>
          <option value={15}>Jharkhand</option>
          <option value={16}>Karnataka</option>
          <option value={17}>Kerala</option>
          <option value={18}>Ladakh</option>
          <option value={19}>Lakshadweep</option>
          <option value={20}>Madhya Pradesh</option>
          <option value={21}>Maharashtra</option>
          <option value={22}>Manipur</option>
          <option value={23}>Meghalaya</option>
          <option value={24}>Mizoram</option>
          <option value={25}>Nagaland</option>
          <option value={26}>Odisha</option>
          <option value={27}>Puducherry</option>
          <option value={28}>Punjab</option>
          <option value={29}>Rajasthan</option>
          <option value={30}>Sikkim</option>
          <option value={32}>Tamil Nadu</option>
          <option value={33}>Telangana</option>
          <option value={34}>Tripura</option>
          <option value={35}>Uttarakhand</option>
          <option value={36}>Uttar Pradesh</option>
          <option value={37}>West Bengal</option>
        </select>
      </div>
      <div className="card__graph">
        <div
          style={{ display: "none" }}
          id="toggle"
          className="graph__statewise"
        >
          <Bar data={stateData} />
        </div>
        <div
          style={{ display: "none" }}
          id="toggle1"
          className="casesdropdown__cards"
        >
          <div className="row1">
            <div className="confirmed__card">
              <p>Confirmed</p>
              <h4 id="conf__toggle">+ {DailyConfirmed}</h4>
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
              <h4 id="recovered__toggle">+ {DailyRecovered}</h4>
              <h3>{Recovered}</h3>
            </div>

            <div className="deaths__card">
              <p>Deaths</p>
              <h4 id="death__toggle">+ {DailyDeaths}</h4>
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
