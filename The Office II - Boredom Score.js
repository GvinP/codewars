function boredom(staff) {
  const score = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };
  const cumulativeScore = Object.values(staff).reduce(
    (acc, el) => (acc += score[el]),
    0
  );
  return cumulativeScore <= 80
    ? 'kill me now'
    : cumulativeScore > 100
    ? 'party time!!'
    : 'i can handle this';
}
