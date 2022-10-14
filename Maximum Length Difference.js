function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  const a1Length = a1.map((v) => v.length);
  const a2Length = a2.map((v) => v.length);

  return Math.max(
    Math.max(...a1Length) - Math.min(...a2Length),
    Math.max(...a2Length) - Math.min(...a1Length)
  );
}
