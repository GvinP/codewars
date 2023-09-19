function timeCorrect(timestring) {
  if (timestring === '') return '';
  if (!/\d\d:\d\d:\d\d/.test(timestring)) return null;
  let arr = timestring.split(':');
  arr = arr.map((i) => parseInt(i));
  arr[1] += Math.floor(arr[2] / 60);
  arr[0] += Math.floor(arr[1] / 60);
  arr[2] = arr[2] % 60;
  arr[1] = arr[1] % 60;
  arr[0] = arr[0] % 24;
  arr = arr.map((i) => (i < 10 ? '0' + i : i));
  return arr.join(':');
}
