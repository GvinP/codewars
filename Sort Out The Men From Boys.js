function menFromBoys(arr){
    return [...new Set(arr.filter(e=>e%2===0).sort((a,b)=>a-b)), ...new Set(arr.filter(e=>e%2).sort((a,b)=>b-a))];
  }