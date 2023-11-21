function uniqueSum(lst) {
  return lst.length ? [...new Set(lst)].reduce((a, b) => a + b, 0) : null;
}
