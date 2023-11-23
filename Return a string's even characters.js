function evenChars(string) {
    return string.length < 2 || string.length > 100 ? 'invalid string' : string.split('').filter((el,i)=> i%2 && el);
  }