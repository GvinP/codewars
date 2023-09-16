function splitTheBill(x) {
  const total = Object.values(x).reduce((a, b) => a + b);
  return Object.keys(x).reduce((a, b, i, arr) => {
    a[b] = Math.round(100 * (x[b] - total / arr.length)) / 100;
    return a;
  }, {});
}
