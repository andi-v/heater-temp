import { useState } from "react";
import HeaterClock from "./components/Clock/HeaterClock";
import "./App.scss";

function App() {
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(50);
  const [targetTemp, setTargetTemp] = useState(5);

  return (
    <div className="app">
      <HeaterClock
        minTemp={minTemp}
        maxTemp={maxTemp}
        targetTemp={targetTemp}
      />
      <div className="input-container">
        <div className="input">
          <input
            id="minTemp"
            value={minTemp}
            onChange={(e) => setMinTemp(parseInt(e.target.value))}
          ></input>
          <label htmlFor="minTemp">Minimum temperature</label>
        </div>

        <div className="input">
          <input
            id="maxTemp"
            value={maxTemp}
            onChange={(e) => setMaxTemp(parseInt(e.target.value) || 0)}
          ></input>
          <label htmlFor="maxTemp">Maximum temperature</label>
        </div>

        <div className="input">
          <input
            id="targetTemp"
            value={targetTemp}
            onChange={(e) => setTargetTemp(parseInt(e.target.value) || 0)}
          ></input>
          <label htmlFor="targetTemp">Target temperature</label>
        </div>
      </div>
    </div>
  );
}

export default App;
