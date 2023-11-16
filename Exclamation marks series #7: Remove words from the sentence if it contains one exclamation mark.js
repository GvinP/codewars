function remove (string) {
    return string.split(' ').filter(x=>x.split('').filter(y=>y==='!').length!==1).join(' ');
  }