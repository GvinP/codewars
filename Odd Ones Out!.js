function oddOnesOut(nums) {
  return nums.filter((x) => nums.filter((y) => y == x).length % 2 === 0);
}
