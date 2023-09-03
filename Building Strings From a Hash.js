function solution(pairs){
    return Object.keys(pairs).map(k=> k + ' = ' + pairs[k]).join(',');
  }