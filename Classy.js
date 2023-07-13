class Cat extends Animal {
  super(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} meows.`;
  }
}
