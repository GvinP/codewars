var maxSequence = function (arr) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = Math.max(arr[i], sum + arr[i]);
    max = Math.max(sum, max);
  }
  return max;
};
