function disariumNumber(n){
    return n === n.toString().split('').reduce((acc,el,i)=> acc+= el**(i+1),0) ? 'Disarium !!' : 'Not !!';
  }