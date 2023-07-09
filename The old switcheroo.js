function vowel2index(str) {
    return str.split('').map((l,i)=> ['a','e','i','o','u'].includes(l.toLowerCase()) ? i+1 : l).join('');
  }