function containAllRots(strng, arr) {
  for (var i = 0; i < strng.length; i++) {
    if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1) {
      return false;
    }
  }
  return true;
}
