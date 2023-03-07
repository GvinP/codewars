function last(x) {
  return x
    .split(" ")
    .map((w) => w.split("").reverse())
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .map((w) => w.reverse().join(""));
}
