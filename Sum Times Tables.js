function sumTimesTables(tables, min, max){
    return tables.reduce((acc,el)=>acc+el,0) * (min + max) * (max + 1 - min) / 2
  }