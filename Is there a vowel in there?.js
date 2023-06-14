const hash = { 101: "e", 117: "u", 97: "a", 105: "i", 111: "o" };
function isVow(a) {
  return a.map((l) => (hash[l] ? hash[l] : l));
}
