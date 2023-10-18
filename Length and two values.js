function alternate(n, firstValue, secondValue) {
  return new Array(n).fill(firstValue).map((x, i) => (i % 2 ? secondValue : x));
}
