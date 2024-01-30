function squareUp(n) {
  const arr0 = Array(n).fill(0);
  const arr = [];
  const answ = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  for (let i = n; i >= 0; i--) {
    answ.push(arr0.slice(0, i).concat(arr.slice(i)));
  }
  return [].concat(...answ.filter((v) => !v.every((v) => v === 0)));
}
