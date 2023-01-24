function roundIt(n) {
  const splittedNumber = n.toString().split(".");
  if (splittedNumber[0].length > splittedNumber[1].length) {
    return Math.floor(n);
  } else if (splittedNumber[0].length < splittedNumber[1].length) {
    return Math.ceil(n);
  } else {
    return Math.round(n);
  }
}
