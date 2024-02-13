const sumSquareEvenRootOdd = ns => {
    return +ns.map((el, i)=> el%2===0? Math.pow(el, 2) : Math.sqrt(el)).reduce((a,b)=>a+b).toFixed(2);
  }