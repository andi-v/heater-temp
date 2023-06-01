import { ClockParams } from "./types";

export const calculateHandPosition = ({
  minTemp,
  maxTemp,
  targetTemp,
}: ClockParams): number => {
  const degreesTotal = maxTemp - minTemp;
  const handOffset = (targetTemp - minTemp) * (50 / degreesTotal);
  let minutes = 35;

  if (35 + handOffset >= 60) {
    minutes += handOffset - 60;
  } else {
    minutes += handOffset;
  }
  return minutes;
};
