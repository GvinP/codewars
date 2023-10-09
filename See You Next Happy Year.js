function nextHappyYear(year) {
  let res = year + 1;
  while (new Set(String(res)).size < 4) {
    res++;
  }
  return res;
}
