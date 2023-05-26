function bump(x) {
  return x.split("").filter((l) => l === "n").length <= 15
    ? "Woohoo!"
    : "Car Dead";
}
