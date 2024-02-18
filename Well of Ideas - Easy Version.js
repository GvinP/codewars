function well(x) {
  const amount = x.filter((a) => a === 'good').length;
  return amount === 0 ? 'Fail!' : amount > 2 ? 'I smell a series!' : 'Publish!';
}
