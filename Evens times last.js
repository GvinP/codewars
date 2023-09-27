function evenLast(numbers) {
    return numbers.reduce((acc, num, i)=> i%2===0 ? acc+= num:acc,0)*numbers[numbers.length-1];
  }