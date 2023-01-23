function findOdd(A) {
    const hash = A.reduce((acc,el)=>{
        if(acc[el]===undefined) {
            acc[el]=1
        } else {
            acc[el]++
        }
        return acc
    },{})
    return +Object.keys(hash).find(el=> hash[el]%2)
}