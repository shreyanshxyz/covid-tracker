import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Graph.css";

function Graph() {
  const [ConfGraph, setConfGraph] = useState();
  const [RecGraph, setRecGraph] = useState();
  const [DeadGraph, setDeadGraph] = useState();

  const chart = () => {
    let confCase = [];
    let recCase = [];
    let deadCase = [];
    let upDate = [];

    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        // console.log(res.data.cases_time_series);
        const lastDate = res.data.cases_time_series.length - 1;
        var i;
        for (i = 0; i < lastDate; i++) {
          confCase.push(parseInt(res.data.cases_time_series[i].dailyconfirmed));
          recCase.push(parseInt(res.data.cases_time_series[i].dailyrecovered));
          deadCase.push(parseInt(res.data.cases_time_series[i].dailydeceased));
          upDate.push(res.data.cases_time_series[i].dateymd);
        }
        setConfGraph({
          labels: upDate,
          datasets: [
            {
              label: "Confirmed",
              data: confCase,
              backgroundColor: "#ff073a",
              pointRadius: 0,
              borderWidth: 4,
              fill: true,
            },
          ],
        });

        setRecGraph({
          labels: upDate,
          datasets: [
            {
              label: "Recoveries",
              data: recCase,
              backgroundColor: "rgba(40, 167, 69, 0.6)",
              borderWidth: 4,
              pointRadius: 0,
              fill: true,
            },
          ],
        });

        setDeadGraph({
          labels: upDate,
          datasets: [
            {
              label: "Deaths",
              data: deadCase,
              backgroundColor: "#6c757d",
              borderWidth: 4,
              pointRadius: 0,
              fill: true,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(confCase, upDate);
  };

  useEffect(() => {
    chart();
  }, []);

  const conf = () => {
    var x = document.getElementById("confirmed");
    var y = document.getElementById("recovered");
    var z = document.getElementById("deaths");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    }
    document.getElementById("confirmed").style.display = "block";
    document.getElementById("recovered").style.display = "none";
    document.getElementById("deaths").style.display = "none";
  };

  const reco = () => {
    var x = document.getElementById("confirmed");
    var y = document.getElementById("recovered");
    var z = document.getElementById("deaths");
    if (y.style.display === "none") {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
    }

    document.getElementById("confirmed").style.visibility = "none";
    document.getElementById("recovered").style.visibility = "block";
    document.getElementById("deaths").style.visibility = "none";
  };

  const ded = () => {
    var y = document.getElementById("recovered");
    var x = document.getElementById("confirmed");
    var z = document.getElementById("deaths");
    if (z.style.display === "none") {
      y.style.display = "none";
      x.style.display = "none";
      z.style.display = "block";
    }

    document.getElementById("confirmed").style.visibility = "none";
    document.getElementById("recovered").style.visibility = "none";
    document.getElementById("deaths").style.visibility = "block";
  };
  return (
    <div>
      <div className="three__buttons">
        <button className="confirmed__button" onClick={conf}>
          <h4>Confirmed</h4>
        </button>
        <button className="recovered__button" onClick={reco}>
          <h4>Recovered</h4>
        </button>
        <button className="deaths__button" onClick={ded}>
          <h4>Deaths</h4>
        </button>
      </div>
      <div className="graph__container">
        <div
          style={{ display: "inline" }}
          id="confirmed"
          className="graph__static"
        >
          <Line data={ConfGraph} />
        </div>
        <div
          style={{ display: "none" }}
          id="recovered"
          className="graph__static"
        >
          <Line data={RecGraph} />
        </div>
        <div style={{ display: "none" }} id="deaths" className="graph__static">
          <Line data={DeadGraph} />
        </div>
      </div>
    </div>
  );
}

export default Graph;
