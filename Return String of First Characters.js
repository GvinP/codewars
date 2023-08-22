function makeString(s){
    return s.split(' ').map(w=>w.split('')[0]).join('');
  }