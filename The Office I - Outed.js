function outed(meet, boss){
    return Object.values(meet).reduce((a,e,i)=> i === Object.keys(meet).indexOf(boss) ? a+=e*2 : a+=e, 0)/(Object.values(meet).length) <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
  }