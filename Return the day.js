const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function whatday(num) {
  return days[num - 1] ?? "Wrong, please enter a number between 1 and 7";
}
