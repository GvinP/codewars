function rowWeights(array) {
  return array.reduce(
    (acc, el, i) => {
      i % 2 ? (acc[1] += el) : (acc[0] += el);
      return acc;
    },
    [0, 0]
  );
}
