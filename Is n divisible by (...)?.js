function isDivisible(...rest) {
  return rest.every((n, i) => n === 0 || rest[0] % n === 0);
}
