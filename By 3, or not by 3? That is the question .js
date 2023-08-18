function divisibleByThree(str) {
  return str.split('').reduce((a, b) => a + b * 1, 0) % 3 === 0;
}
