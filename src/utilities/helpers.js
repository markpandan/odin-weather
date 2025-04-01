import { DAY_STRING } from "./constants";

export function getDayText(date) {
  const num = new Date(date).getDay().toString();
  return DAY_STRING[num];
}
