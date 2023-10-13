function evenOrOdd(str) {
  let odd = [];
  let even = [];
  str.split``.map((v) => ((v * 1) % 2 === 0 ? even.push(v) : odd.push(v)));
  odd = odd.reduce((a, b) => a + b * 1, 0);
  even = even.reduce((a, b) => a + b * 1, 0);
  return odd > even
    ? 'Odd is greater than Even'
    : odd < even
    ? 'Even is greater than Odd'
    : 'Even and Odd are the same';
}
