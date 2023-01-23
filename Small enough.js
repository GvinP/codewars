function smallEnough(a, limit){
    return a.filter(n=>n<=limit).length === a.length;
  }