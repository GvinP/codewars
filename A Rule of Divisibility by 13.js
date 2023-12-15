function thirt(n) {
  let sum = n;
  while (1) {
    let temp = sum;
    sum = sum
      .toString()
      .split('')
      .reverse()
      .reduce((acc, el, i) => (acc += (10 ** i % 13) * +el), 0);
    if (sum === temp) return sum;
  }
}
