function change(string) {
  const res = new Array(26).fill(0);
  string
    .split('')
    .forEach(
      (el) =>
        el.toLowerCase().charCodeAt() > 96 &&
        el.toLowerCase().charCodeAt() < 123 &&
        (res[el.toLowerCase().charCodeAt() - 97] = 1)
    );
  return res.join('');
}
