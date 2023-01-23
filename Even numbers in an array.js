function evenNumbers(array, number) {
    return array.filter(num=>!(num%2)).slice(-number);
  }