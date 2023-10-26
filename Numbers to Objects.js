function numObj(s) {
  return s.map((el) => ({ [el]: String.fromCharCode(el) }));
}
