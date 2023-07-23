function dashatize(num) {
    if(Number.isNaN(num)) return 'NaN';
    if(num<0) num*=-1
    let str = num <9 ? `${num}` : `${num}`.split('').map((n,i,arr)=> n%2!==0 ? (i===0?`${n}-`: i===(arr.length-1)?`-${n}`:`-${n}-`):n).join('').replace(/--/gi,'-');
    return str
  }