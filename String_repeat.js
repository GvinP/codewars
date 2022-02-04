function repeatStr (n, s) {
    return (n < 1) ? "" : repeatStr (n - 1, s) + s;
  }