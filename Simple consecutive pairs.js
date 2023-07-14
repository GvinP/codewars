function pairs(ar){
    return ar.reduce((acc,el,i,arr)=>i%2 &&  Math.abs(el - arr[i-1]) === 1 ? acc+=1 : acc,0);
  };