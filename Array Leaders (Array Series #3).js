function arrayLeaders(numbers){
    return numbers.filter((el,i,arr)=>el>(arr.slice(i+1).reduce((a,b)=>a+b,0)));
  }