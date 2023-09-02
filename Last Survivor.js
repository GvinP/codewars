function lastSurvivor(letters, coords) {
  const newArr = letters.split('');
  coords.map((x) => newArr.splice(x, 1));
  return newArr.join('');
}
