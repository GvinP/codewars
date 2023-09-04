function twoDecimalPlaces(number) {
    return +String(number).split('.').map((x,i)=>i===0?x:x.slice(0,2)).join('.');
  } 