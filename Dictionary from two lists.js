function createDict(keys, values) {
  return keys.reduce((acc, k, i) => {
    acc[k] = values[i] ?? null;
    return acc;
  }, {});
}
