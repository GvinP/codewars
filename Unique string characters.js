function solve(a,b){
    return a.split('').filter(l=>!b.split('').includes(l)).concat(b.split('').filter(l=>!a.split('').includes(l))).join('');
  };