function lowestTemp(t) {
  return t.length === 0 ? null : Math.min(...t.split(' ').map(Number));
}
