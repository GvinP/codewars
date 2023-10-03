function firstNonConsecutive(arr) {
  return arr.find((el, i) => i !== 0 && el !== arr[i - 1] + 1) ?? null;
}
