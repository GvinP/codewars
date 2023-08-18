function encode(str,  n) {
    return str.split('').map((l, i)=> l.charCodeAt()-96+ +n.toString().split('')[i%n.toString().length]);
  }