function high(x){
    const maxValue = (e) => e.split(" ").reduce((acc,el)=> Math.max(acc, el.split("").reduce((acc, e)=>acc+=e.charCodeAt()-96,0)), 0);
    return x.split(" ").find(el=>el.split("").reduce((acc, e)=>acc+=e.charCodeAt()-96,0)>=maxValue(x));
  }