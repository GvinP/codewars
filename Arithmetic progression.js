function arithmeticSequenceElements(a, d, n) {
  return new Array(n).fill(0).map((_, i) => a + d * i).join(', ');
}
