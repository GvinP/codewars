function circleArea(radius) {
  if (radius <= 0 || typeof radius !== 'number') throw new Error();
  return +(Math.PI * radius * radius).toFixed(2);
}
