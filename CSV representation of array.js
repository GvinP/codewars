function toCsvText(array) {
    return array.map(el=>el.join()).join("\n");
  }