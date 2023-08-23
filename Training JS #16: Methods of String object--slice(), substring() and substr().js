function cutIt(arr) {
  const minLength = Math.min(...arr.map((w) => w.length));
  return arr.map((w) => w.slice(0, minLength));
}
