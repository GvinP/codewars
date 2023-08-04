function differenceOfSquares(n){
    return new Array(n).fill(0).reduce((acc,_,i)=> acc + i + 1, 0) ** 2 - new Array(n).fill(0).reduce((acc,_,i)=> acc +( i + 1) **2, 0);
  }