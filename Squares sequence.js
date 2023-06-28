function squares(x, n) {
    return n <= 0 ? [] : new Array(n).fill(0).reduce((acc, el, i)=> i===0 ? [x] : [...acc, acc[i - 1]**2],[]);
  }