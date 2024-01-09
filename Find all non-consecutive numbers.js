function allNonConsecutive(arr) {
  return arr.reduce((acc, n, i) => (i !== 0 && n !== arr[i - 1] + 1 ? [...acc, { i, n }] : acc), []);
}
