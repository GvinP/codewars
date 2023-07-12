function wordValue(a) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return a.map((w,i)=> w.split('').reduce((a,l)=> l?a+=alphabet.indexOf(l)+1:l,0)*(i+1));
  }