function sumCubes(n){
    return new Array(n).fill(0).map((_,i)=>i+1).reduce((acc, n)=>acc+=n**3);
  }