function mean(lst){
    return lst.reduce((acc,el)=>el.charCodeAt()<96?[[...acc[0],el],acc[1]]:[acc[0],acc[1]+el],[[],'']).map((x,i)=>i===0?x.reduce((a,b)=>a+ +b,0)/x.length:x);
  }