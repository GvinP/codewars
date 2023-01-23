function bigToSmall(arr) {
  return arr
    .reduce((acc, el) => [...acc, ...el], [])
    .sort((a, b) => b - a)
    .join(">");
}
