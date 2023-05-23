function solution(string) {
  return string.split("").reduce((acc, el, index, arr) => {
    if (arr[index + 1] && arr[index + 1].charCodeAt() < 90) {
      return (acc += arr[index] + " ");
    } else if (index < arr.length) {
      return (acc += arr[index]);
    }
  }, "");
}
