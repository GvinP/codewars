Array.prototype.filter = function (func) {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      res.push(this[i]);
    }
  }

  return res;
};
