function makePassword(phrase) {
  const dict = { i: 1, o: 0, s: 5 };
  return phrase
    .split(' ')
    .map((w) =>
      Object.keys(dict).includes(w[0].toLowerCase())
        ? dict[w[0].toLowerCase()]
        : w[0]
    )
    .join('');
}
