function productArray(numbers) {
  return numbers.map((el, i, arr) =>
    arr.reduce((acc, num, ind) => (i === ind ? acc : (acc = acc * num)), 1)
  );
}
