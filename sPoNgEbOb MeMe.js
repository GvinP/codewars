function spongeMeme(sentence) {
    return sentence.toLowerCase().split('').map((x,i)=>i%2===0?x.toUpperCase():x).join('');
  }