function rangeBitCount(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) arr.push(i);
  return arr.map((v) => v.toString(2).replace(/0/gi, '')).join``.length;
}
