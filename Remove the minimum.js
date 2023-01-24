function removeSmallest(numbers) {
  let smallestNumber = Math.min.apply(Math, numbers);
  let indexOfSmallestNumber = numbers.indexOf(smallestNumber);
  numbers.splice(indexOfSmallestNumber, 1);
  return numbers;
}
