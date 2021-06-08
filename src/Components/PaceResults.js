import React from "react";
import { minutesPerUnit } from "../Utils/utils";

/* Performs reactive min/k or min/mi conversion */
function PaceResults({ pace }) {
  return (
    <div className="flex justify-center text-xl">{minutesPerUnit(pace)}</div>
  );
}

export default PaceResults;
