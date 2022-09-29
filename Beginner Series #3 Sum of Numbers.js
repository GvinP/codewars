function getSum(a, b) {
  if (a === b) return a;
  let res = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      res += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      res += i;
    }
  }
  return res;
}
