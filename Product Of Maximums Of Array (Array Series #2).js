function maxProduct(numbers, size){
    return numbers.sort((a,b)=>a-b).splice(-size).reduce((acc,x)=> acc * x);
  }