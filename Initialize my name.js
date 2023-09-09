function initializeNames(name) {
  return name
    .split(' ')
    .map((w, i, arr) => (i === 0 || i === arr.length - 1 ? w : w[0] + '.'))
    .join(' ');
}
