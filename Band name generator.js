function bandNameGenerator(str) {
    return str[0]===str[str.length-1] ? str.replace(str[0],str[0].toUpperCase())+str.slice(1,str.length) : 'The ' + str.replace(str[0],str[0].toUpperCase());
  }