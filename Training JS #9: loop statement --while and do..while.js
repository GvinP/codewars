function padIt(str, n) {
  return new Array(n)
    .fill(0)
    .reduce((acc, _, i) => (i % 2 ? [...acc, "*"] : ["*", ...acc]), [str])
    .join("");
}
