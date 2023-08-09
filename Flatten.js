var flatten = function (array){
    return array.reduce((acc,el)=> Array.isArray(el)?[...acc, ...el]:[...acc, el],[]);
  }