function noBoringZeros(n) {
    if(n<10&& n>=0) return n
    let res = n.toString().split('')
    for(let i = res.length-1; i >= 0; i--) {
        if(res[i] === '0') {
            res.pop()
        } else {
            return +res.join('')
        }
    }
}