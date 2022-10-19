function array(arr) {
  if (arr.length < 4) return null;
  return arr.split(",").slice(1, -1).join(" ");
}
