function isPythagoreanTriple(int) {
  return (
    int[0] ** 2 + int[1] ** 2 === int[2] ** 2 ||
    int[0] ** 2 + int[2] ** 2 === int[1] ** 2 ||
    int[2] ** 2 + int[1] ** 2 === int[0] ** 2
  );
}
