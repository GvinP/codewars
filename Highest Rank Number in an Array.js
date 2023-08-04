function highestRank(arr) {
  const hash = {};
  arr.forEach((el) => (hash[el] ? (hash[el] += 1) : (hash[el] = 1)));
  return +Object.keys(hash).reduce((a, b) => (hash[a] > hash[b] ? a : b));
}
