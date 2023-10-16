function product (string) {
    return string.split('').filter(x=>x==='?').length*string.split('').filter(x=>x==='!').length;
  }