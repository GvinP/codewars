function sumOfIntegersInString(s){
    return s.split('').map(x=>Number(x)||x==='0'?Number(x):' ').join('').split(' ').reduce((acc,el)=>el?acc+ +el:acc,0);
  }