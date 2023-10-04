function stantonMeasure(arr) {
  let n = 0;
  arr.map((v) => (v === 1 ? n++ : v));
  let answer = 0;
  arr.map((v) => (v === n ? answer++ : v));
  return answer;
}
