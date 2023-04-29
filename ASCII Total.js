function uniTotal(string) {
  return string.split("").reduce((acc, l) => (acc += l.charCodeAt()), 0);
}
