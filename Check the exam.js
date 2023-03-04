function checkExam(array1, array2) {
  const result = array2.reduce(
    (acc, cur, index) => (acc += !cur ? 0 : cur === array1[index] ? 4 : -1),
    0
  );
  return result < 0 ? 0 : result;
}
