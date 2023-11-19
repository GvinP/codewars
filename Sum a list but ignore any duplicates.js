function sumNoDuplicates(numList) {
    const map = numList.reduce((acc,cur,i)=>acc[cur]?({...acc, [cur]: acc[cur]+1}):({...acc, [cur]: 1}) ,{})
    return Object.keys(map).reduce((acc, curr)=> map[curr]===1? acc + +curr : acc,0);
  }