function sumOfN(n) {
    Array.from(Array(Math.abs(n) + 1), (el, idx) => (idx + 1) * idx / 2 * (idx > 0 ? Math.sign(n) : 1));
  };