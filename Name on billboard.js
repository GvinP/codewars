function billboard(name, price = 30) {
  return name.split("").reduce((acc, el) => (acc += price), 0);
}
