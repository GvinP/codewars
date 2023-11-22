function elevatorDistance(array) {
    return array.slice(1).reduce((acc,el,i)=>acc+Math.abs(el-array[i]),0);
  }