function explode(s) {
  return s.split("").reduce((a, e) => (a += e.repeat(+e)), "");
}
