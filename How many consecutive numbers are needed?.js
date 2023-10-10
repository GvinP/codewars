function consecutive(array) {
    return array.length < 2 ? 0 : (Math.max(...array)-Math.min(...array))-array.length+1;
  }