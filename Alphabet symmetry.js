function solve(arr){  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      return arr.map(word=> word.toLowerCase().split('').reduce((acc, l, i)=> alphabet.indexOf(l) === i ? acc+=1 : acc, 0));
    };