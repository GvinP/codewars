function pattern(n){
    return new Array(n).fill(0).map((x,i)=>i===0?'1':`1${'*'.repeat(i)+(i+1)}`).join('\n');
  }