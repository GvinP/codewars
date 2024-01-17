function moveTen(s){
    return s.split('').map(l=>String.fromCharCode(l.charCodeAt()+10>122?l.charCodeAt()+10-26:l.charCodeAt()+10)).join('');
  }