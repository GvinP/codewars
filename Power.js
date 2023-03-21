function numberToPower(number, power) {
  return power ? new Array(power).fill(number).reduce((a, b) => a * b) : 1;
}
