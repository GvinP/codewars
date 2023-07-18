multiplicationTable = function(size) {
    return new Array(size).fill(0).map((_,i)=> new Array(size).fill(0).map((_,j)=> (i+1)*(j+1)));
  }
  