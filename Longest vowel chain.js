function solve(s) {
  return Math.max(...s.split(/[^aoeiu]/i).map((x) => x.length));
}
