function fiveLine(s) {
  return [1, 2, 3, 4, 5].map((n) => s.trim().repeat(n)).join('\n');
}
