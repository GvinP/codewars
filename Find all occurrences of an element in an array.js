const findAll = (array, n) => {
  return array.reduce((a, e, i) => (e === n ? [...a, i] : a), []);
};
