function convertPalindromes(numbers) {
  const isPalindrome = (num) => {
    const arr = num.toString().split('');
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return 0;
      }
    }
    return 1;
  };
  return numbers.map((num) => isPalindrome(num));
}
