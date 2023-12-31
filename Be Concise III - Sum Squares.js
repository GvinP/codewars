function sumSquares(array) {
  return array.reduce((acc, el, i) => acc + el ** 2, 0);
}
