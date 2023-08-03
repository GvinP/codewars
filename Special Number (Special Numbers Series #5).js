function specialNumber(n){
    return `${n}`.split('').every(num=> +num <= 5 && +num >= 0) ? "Special!!" : "NOT!!";
  }