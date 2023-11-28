function correct(string) {
    const map = {'5':'S','0':'O','1':'I'};
      return string.split('').map(x=>Object.keys(map).includes(x)?map[x]:x).join('');
  }