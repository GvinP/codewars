var clonewars = function(kataPerDay) {
    return [Math.round(Math.pow(2, kataPerDay - 1)), Array(kataPerDay).fill(0).map((_, i, arr) => Math.pow(2, i) * (arr.length - i)).reduce((a, b) => a + b, 0)];
  }