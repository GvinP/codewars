var splitInParts = function(s, partLength){
    return s.split('').map((el,i)=> i!==0&&i%partLength===0 ? ' ' + el : el).join('');
  }