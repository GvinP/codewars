function minSum(arr) {
    return arr.sort((a,b)=>a-b).reduce((acc, n, i, a)=> i < Math.floor(a.length/2) ? acc += n*a[a.length-1-i] : acc ,0)
  }