function consonantCount(str) {
    return str.split('').filter(v=>/[qzwsxdcrfvtgbyhnjmklp]/gi.test(v)).length;
  }