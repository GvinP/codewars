function pipeFix(numbers) {
  return new Array(Math.max(...numbers) - Math.min(...numbers) + 1)
    .fill()
    .map((_, i) => Math.min(...numbers) + i);
}
