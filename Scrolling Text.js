function scrollingText(text) {
  return new Array(text.length).fill(0).map((_, i) => (text.slice(i) + text.slice(0, i)).toUpperCase());
}
