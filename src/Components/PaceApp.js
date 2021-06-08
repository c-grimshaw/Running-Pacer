import React, { useState } from "react";
import PaceForm from "./PaceForm";
import PaceResults from "./PaceResults";
import axios from "axios";

function PaceApp() {
  const [paceInfo, setPaceInfo] = useState({
    distance: 0,
    distanceUnits: "km",
    hours: 0,
    minutes: 0,
    seconds: 0,
    paceUnits: "km",
  });

  const [equivs, setEquivs] = useState({});
  const handleClick = (e) => {
    setEquivs();
  };
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
  return (
    <div className="bg-green-50 w-max shadow-md p-6 rounded-lg mt-5 ml-10">
      <div className="flex justify-center text-2xl font-bold items-center font-sans">
        Pace Calculator
        <span className="bg-white rounded-full ml-4 text-xs h-14 w-14 flex items-center justify-center border">
          VDOT
        </span>
      </div>
      <PaceForm pace={paceInfo} onPaceInfoChange={setPaceInfo} />
      <PaceResults pace={paceInfo} />
    </div>
  );
}

export default PaceApp;
