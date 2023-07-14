function solve(s) {
    return Math.max(...s.replace(/[aeiou]/gi, ' ').split(' ').filter(w=>w).map(w=>w.split('').reduce((a,e)=>a+=e.charCodeAt()-96,0)));
  };