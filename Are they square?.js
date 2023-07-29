var isSquare = function(arr){
    return arr.length ? arr.filter(num=>num === Math.sqrt(num)**2).length === arr.length : undefined;
  }