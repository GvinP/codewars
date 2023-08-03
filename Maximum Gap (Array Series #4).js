function maxGap(numbers) {
  numbers.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (max < Math.abs(numbers[i + 1] - numbers[i])) {
      max = numbers[i + 1] - numbers[i];
    }
  }
  return max;
}
