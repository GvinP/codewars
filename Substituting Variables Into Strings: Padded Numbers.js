function solution(value){
    return 'Value is ' + new Array(5 -value.toString().length).fill(0).join('') + value.toString();
  }