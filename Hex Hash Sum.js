function hexHash(code) {
  return code.split('').map((x) => x.charCodeAt().toString(16)).join('').split('').filter(Number).reduce((a, b) => a + +b, 0);
}
