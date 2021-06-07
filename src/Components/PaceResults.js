import React from "react";

/* Performs reactive min/k or min/mi conversion */
function PaceResults({ pace }) {
  const [distance, time, units] = [
    (parseFloat(pace.distance) / (pace.paceUnits === "km" ? 1 : 1.6)) *
      (pace.distanceUnits === "km" ? 1 : 1.6),
    parseFloat(pace.hours) * 60 +
      parseFloat(pace.minutes) +
      parseFloat(pace.seconds) / 60,
    pace.paceUnits,
  ];
  const minutes = time / distance;
  const seconds = parseInt((minutes - Math.trunc(minutes)) * 60);
  const minutesPerUnit = `${Math.floor(minutes)}:${
    seconds < 10 ? "0" + seconds : seconds
  } min/${units}`;

  return <div>{distance && time ? minutesPerUnit : ""}</div>;
}

export default PaceResults;
