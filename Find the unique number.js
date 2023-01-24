function findUniq(arr) {
    let hash = {}
    for(let i = 0; i<arr.length; i++) {
        if(hash[arr[i]]===undefined) {
            hash[arr[i]]=1
        } else {
            hash[arr[i]]++
        }
    }
    return Object.values(hash)[0]===1? +Object.keys(hash)[0] : +Object.keys(hash)[1]
}