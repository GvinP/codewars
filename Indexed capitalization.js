function capitalize(s,arr){
    return arr.reduce((acc, el)=> s[el] ? acc.substring(0,el)+s[el].toUpperCase()+acc.substring(el+1,s.length) : acc  ,s);
  };