function XO(str) {
    let countX = 0;
    let countO = 0;
    str.toLowerCase().split('').forEach(l=>l==='x'?countX++:l==='o'?countO++:l)
    return countX===countO
  }