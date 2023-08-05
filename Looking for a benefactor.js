const newAvg = (array, newavg) => {
  const total = array.reduce((acc, el) => acc + el, 0);
  const result = newavg * (array.length + 1) - total;

  if (result < 0) throw new Error('Expected New Average is too low');
  return Math.ceil(result);
};
