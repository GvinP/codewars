function balance(left,right){
    const l = left.split('').reduce((acc,el)=>el==='!'?acc+2:acc+3,0);
    const r = right.split('').reduce((acc,el)=>el==='!'?acc+2:acc+3,0);
    return r === l ? 'Balance' : r < l ? 'Left' : 'Right';
  }