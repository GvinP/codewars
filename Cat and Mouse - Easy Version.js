function catMouse(x){
    return Math.abs(x.indexOf('m')-x.indexOf('C')) > 4 ? 'Escaped!' : 'Caught!';
  }