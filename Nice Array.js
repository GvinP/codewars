function isNice(arr){
    return arr.length ? arr.every(v=>arr.includes(v+1)||arr.includes(v-1)) : false;
  }