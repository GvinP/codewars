class Cube {
  constructor(side) {
    this.setSide(side);
  }
  getSide() {
    return this.side;
  }
  setSide(n = 0) {
    this.side = Math.abs(n);
  }
}
