function solve(arr) {
  return arr.filter((x, i, a) => a.slice(i + 1).every((y) => x > y));
}
