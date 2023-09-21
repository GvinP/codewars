function save(sizes, hd) {
  let count = 0;
  let totalSize = 0;
  for (let i = 0; i < sizes.length; i++) {
    totalSize += sizes[i];
    if (totalSize > hd) {
      return count;
    }
    count++;
  }
  return count;
}
