function counterEffect(hitCount) {
  return hitCount.split('').map((x) => Array.from({ length: +x + 1 }, (_, i) => i));
}
