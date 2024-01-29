var FindFunction = function (func, arr) {
  return arr.filter(func.find((x) => typeof x === 'function'));
};
