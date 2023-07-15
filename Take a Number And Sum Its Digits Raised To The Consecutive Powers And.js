function sumDigPow(a, b) {
  const ans = [];
  while (a <= b) {
    if (a.toString().split('').reduce((x, y, i) => x + parseInt(y) ** (i + 1), 0) == a) {
      ans.push(a);
    }
    a++;
  }
  return ans;
}
