import React, { useState } from "react";
import PaceForm from "./PaceForm";
import PaceResults from "./PaceResults";
import axios from "axios";

function PaceApp() {
  const [paceInfo, setPaceInfo] = useState({
    distance: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    units: "km",
  });

  /*
  var params = {
    distance: distance,
    unit: "km",
    time: `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
    pace: "empty",
    predict: "true",
  };

  const data = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");

  const fetchPaces = (event) => {
    event.preventDefault();
    axios
      .post("/api/find_paces/", data)
      .then((response) => setPaceInfo(response.data));
  };
  */

  console.log(paceInfo);
  return (
    <div>
      <PaceForm pace={paceInfo} onPaceInfoChange={setPaceInfo} />
      <PaceResults pace={paceInfo} />
    </div>
  );
}

export default PaceApp;
