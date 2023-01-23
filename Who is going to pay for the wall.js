function whoIsPaying(name){
    return [...new Set([name, name.slice(0, 2)])];
  }