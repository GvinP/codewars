function predictAge(...ages) {
  return Math.floor(Math.sqrt(ages.reduce((a, b) => (a = a + b ** 2), 0)) / 2);
}
