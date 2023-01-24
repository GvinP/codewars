function alphabetWar(fight) {
  let count = 0;
  const left = { w: 4, p: 3, b: 2, s: 1 };
  const right = { m: 4, q: 3, d: 2, z: 1 };
  for (let i = 0; i < fight.length; i++) {
    if (left[fight[i]] !== undefined) {
      count += left[fight[i]];
    }
    if (right[fight[i]] !== undefined) {
      count -= right[fight[i]];
    }
  }
  if (count < 0) {
    return "Right side wins!";
  }
  if (count > 0) {
    return "Left side wins!";
  }
  if (count == 0) {
    return "Let's fight again!";
  }
}
