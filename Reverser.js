function reverse(n) {
  let digit = 0;
  let result = 0;
  while (n) {
    digit = n % 10;
    result = result * 10 + digit;
    n = (n / 10) | 0;
  }
  return result;
}
