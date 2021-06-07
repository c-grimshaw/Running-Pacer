import React from "react";

const PaceForm = ({ pace, onPaceInfoChange }) => {
  return (
    <form>
      <div>
        <label>Enter distance:</label>
        <input
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
      <label>Enter pace:</label>
      <input
        placeholder="Hours"
        onChange={(h) => {
          onPaceInfoChange({
            ...pace,
            hours: h.target.value ? h.target.value : 0,
          });
        }}
      />
      <input
        placeholder="Minutes"
        onChange={(m) =>
          onPaceInfoChange({
            ...pace,
            minutes: m.target.value ? m.target.value : 0,
          })
        }
      />
      <input
        placeholder="Seconds"
        onChange={(s) =>
          onPaceInfoChange({
            ...pace,
            seconds: s.target.value ? s.target.value : 0,
          })
        }
      />
      <div>
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
        <button type="submit">Calculate</button>
      </div>
    </form>
  );
};

export default PaceForm;
