function tidyNumber(n) {
  return n.toString().split('').sort().join('') == n;
}
