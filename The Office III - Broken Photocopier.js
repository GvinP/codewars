function broken(x) {
  return x.split('').map((n) => (n === '1' ? 0 : 1)).join('');
}
