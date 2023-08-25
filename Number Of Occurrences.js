Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
  value: function numberOfOccurrences(element) {
    return this.filter((value) => value == element).length;
  },
});
