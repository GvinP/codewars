function findLongest(array) {
  let biggestNum = array[0];

  for (let i = 1; i < array.length; i++) {
    if (
      Math.floor(Math.log10(array[i]) || 0) >
      Math.floor(Math.log10(biggestNum) || 0)
    ) {
      biggestNum = array[i];
    }
  }
  return biggestNum;
}
