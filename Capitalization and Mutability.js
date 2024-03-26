function capitalizeWord(word) {
  return word.split('').map((x, i) => (i === 0 ? x.toUpperCase() : x)).join('');
}
