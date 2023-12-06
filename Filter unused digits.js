function unusedDigits(...args) {
    return new Array(10).fill(0).map((_,i)=>!args.join('').includes(i.toString())?i:'i').filter(x=>x!=='i').join('');
  }