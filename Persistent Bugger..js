function persistence(num) {
  let count = 0;
  while (num > 9) {
    num = [...`${num}`].reduce((a, b) => (a *= b), 1);
    count++;
  }
  return count;
}
