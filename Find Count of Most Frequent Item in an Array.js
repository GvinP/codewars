function mostFrequentItemCount(collection) {
    return collection.length === 0 ? 0 : Math.max(...Object.values(collection.reduce((acc,el)=> acc[el] ? ({...acc, [el]: acc[el] + 1 }) : ({...acc, [el]: 1}) ,{})));
  }