function powersOfTwo(n){
    let rez = []
    for(let i = 0; i <= n; i++) {
        rez.push(Math.pow(2,i))
    }
    return rez
}