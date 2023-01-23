function countPositivesSumNegatives(input) {
    if (!input) {return []}
    let countPos = 0;
    let sumNeg = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] <= 0) {sumNeg += input[i];} else {countPos++;}; 
    }
      if (input.length !== 0) {
        return [countPos, sumNeg];
      } else {
        return [];
        }
  }