function sumOfMinimums(arr) {
  return arr.reduce((acc, el) => (acc += Math.min(...el)), 0);
}
