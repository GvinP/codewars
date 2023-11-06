class Dictionary {
  constructor() {
    this.d = {};
  }

  newEntry(key, value) {
    this.d[key] = value;
  }

  look(key) {
    return this.d[key] || `Can\'t find entry for ${key}`;
  }
}
