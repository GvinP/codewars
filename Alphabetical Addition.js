function addLetters(...letters) {
  const alpha = 'zabcdefghijklmnopqrstuvwxy';
  const sum = letters.reduce((sum, letter) => sum + alpha.indexOf(letter), 0) % 26;
  return alpha[sum];
}
