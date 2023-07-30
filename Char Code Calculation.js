function calc(x){
    return x.split('').map(c=>c.charCodeAt()).join('').split('').filter(e=> e==='7').length*6;
  }