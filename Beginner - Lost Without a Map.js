function maps(x){
    let y = [...x];
    for (let i = 0; i < x.length; i++) {
      y[i] *= 2;
    }
    return y;
  }