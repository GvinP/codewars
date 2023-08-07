function lostSheep(friday,saturday,total){
    return total - (friday.reduce((a,b)=>a+b,0)+saturday.reduce((a,b)=>a+b,0));
  }