class Block {
  constructor(data) {
    this.a = data[0];
    this.b = data[1];
    this.c = data[2];
  }
  getWidth() {
    return this.a;
  }
  getLength() {
    return this.b;
  }
  getHeight() {
    return this.c;
  }
  getVolume() {
    return this.a * this.b * this.c;
  }
  getSurfaceArea() {
    return this.a * this.b * 2 + this.a * this.c * 2 + this.c * this.b * 2;
  }
}
