function automorphic(n){
    return (n**2).toString().slice(-`${n}`.length) === `${n}` ? 'Automorphic' : 'Not!!';
  }