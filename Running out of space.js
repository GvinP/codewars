function spacey(array) {
  return array.map((_, i, arr) => arr.slice(0, i + 1).join(''));
}
