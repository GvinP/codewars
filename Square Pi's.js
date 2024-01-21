function squarePi(digits) {
  const pi =
    '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  return Math.ceil(Math.sqrt(new Array(digits).fill(0).reduce((acc, _, i) => (acc += pi[i] ** 2), 0)));
}
