function divCon(x) {
  return x.reduce(
    (acc, el) => (typeof el === "number" ? (acc += el) : (acc -= +el)),
    0
  );
}
