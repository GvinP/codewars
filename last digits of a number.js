function lastDigit(n, d) {
  return d <= 0 ? [] : n.toString().split('').slice(-d).map(Number);
}
