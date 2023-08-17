function hydrate(s) {
    const amount = s.replace(/[a-z,]/gi, '').split(' ').reduce((a,b)=>a+ +b, 0);
    return `${amount} glass${amount > 1 ?'es':''} of water`;
  }