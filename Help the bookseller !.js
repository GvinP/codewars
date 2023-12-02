function stockList(listOfArt, listOfCat){
    if(listOfArt.every(x=>x.split(' ')[1]==='0')) return '';
    return listOfCat.map(cat=> `(${cat} : ${listOfArt.reduce((acc,el)=> el.startsWith(cat) ? acc + +el.split(' ')[1] : acc,0)})`).join(' - ');
  }