function divisors(integer) {
  const divisors = new Array(integer).fill(0).reduce((acc, _, i) => (i !== 1 && integer % i === 0 ? [...acc, i] : acc), []);
  return divisors.length ? divisors : `${integer} is prime`;
}
