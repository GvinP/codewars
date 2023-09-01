function isLucky(n) {
    return n === 0 || String(n).split('').reduce((acc,el)=>acc+el,0) % 9 === 0;
  }