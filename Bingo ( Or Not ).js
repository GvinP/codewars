function bingo(a) {
    return ['b','i','n','g','o'].every(l => a.map(n=> String.fromCharCode(n+96)).includes(l))?'WIN':'LOSE';
  }