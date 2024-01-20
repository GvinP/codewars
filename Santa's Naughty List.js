function findChildren(santasList, children) {
    return [...new Set(santasList.reduce((acc,el)=>children.includes(el)?[...acc, el]:acc,[]).sort())];
  }