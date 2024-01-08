// Javascript: return multiples into an array
function multiples(s1,s2,s3){
    return new Array(s3).fill(0).reduce((acc,_,i)=> i!==0&&i%s1===0&&i%s2===0?[...acc, i]:acc,[]);
  }