function generateShape(integer){
    return new Array(integer).fill(0).map(el=>new Array(integer).fill("+").join("")).join("\n");
  }