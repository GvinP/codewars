function multiples(m, n) {
  return new Array(m).fill(0).map((_, i) => n * (i + 1));
}
