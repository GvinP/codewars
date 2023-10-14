function freqSeq(str, sep) {
  const map = str.split('').reduce((acc, el) => {
    if (acc[el]) {
      acc[el] += 1;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  return str
    .split('')
    .map((x) => map[x])
    .join(sep);
}
