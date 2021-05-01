import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, MenuItem, Select } from "@material-ui/core";

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
    <div>
      <FormControl className="state__dropdown">
        <Select>
          {States.map((s) => (
            <MenuItem key={s.statecode}>{s.state}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default IndiaStates;
