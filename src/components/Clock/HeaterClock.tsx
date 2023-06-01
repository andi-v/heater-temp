import Clock from "react-clock";
import { ClockParams } from "./types";
import { calculateHandPosition } from "./utils";
import "react-clock/dist/Clock.css";
import "./style.scss";

const HeaterClock = ({ minTemp, maxTemp, targetTemp }: ClockParams) => {
  const minutes = calculateHandPosition({ minTemp, maxTemp, targetTemp });
  const currentDate = new Date(2023, 6, 1, 12, minutes, 0);

  return (
    <div className="heater-clock">
      <Clock
        value={currentDate}
        hourHandLength={0}
        minuteHandLength={100}
        renderSecondHand={false}
      />
      <div className="target-temp-label">{targetTemp + "°C"}</div>
    </div>
  );
};

export default HeaterClock;
