import React from "react";

const PaceForm = ({ pace, onPaceInfoChange }) => {
  return (
    <form className="m-1 flex flex-col items-center">
      <div>
        <label className="font-bold text-lg text-grey-darkest">Distance</label>
      </div>
      <div>
        <input
          className="w-25 ml-1 p-1 border"
          placeholder="0"
          onChange={(d) =>
            onPaceInfoChange({
              ...pace,
              distance: d.target.value ? d.target.value : 0,
            })
          }
        />
        <select
          defaultValue="km"
          onChange={(e) =>
            onPaceInfoChange({ ...pace, distanceUnits: e.target.value })
          }
        >
          <option value="km">km</option>
          <option value="mi">mi</option>
        </select>
      </div>
      <div>
        <label className="font-bold text-lg text-grey-darkest">Duration</label>
      </div>
      <div>
        <input
          className="w-20 m-0.5 p-1 border"
          placeholder="Hours"
          onChange={(h) => {
            onPaceInfoChange({
              ...pace,
              hours: h.target.value ? h.target.value : 0,
            });
          }}
        />
        <input
          className="w-20 m-0.5 p-1 border"
          placeholder="Minutes"
          onChange={(m) =>
            onPaceInfoChange({
              ...pace,
              minutes: m.target.value ? m.target.value : 0,
            })
          }
        />
        <input
          className="w-20 m-0.5 p-1 border"
          placeholder="Seconds"
          onChange={(s) =>
            onPaceInfoChange({
              ...pace,
              seconds: s.target.value ? s.target.value : 0,
            })
          }
        />
      </div>
      <div className="flex justify-center border rounded">
        <select
          defaultValue="km"
          onChange={(e) =>
            onPaceInfoChange({ ...pace, paceUnits: e.target.value })
          }
        >
          <option value="km">min/km</option>
          <option value="mi">min/mi</option>
        </select>
      </div>
      <div>
        <button
          className="mt-3 self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
          type="submit"
        >
          Calculate
        </button>
      </div>
    </form>
  );
};

export default PaceForm;
