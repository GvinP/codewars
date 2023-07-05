function reverse(str) {
  return str
    .trim()
    .split(" ")
    .map((w, i) => (i % 2 ? w.split("").reverse().join("") : w))
    .join(" ");
}
