function sumOfDifferences(arr) {
    arr.sort((a,b)=>b-a)
    let rez = 0
    for (let i=0;i<arr.length-1;i++) {
        rez += arr[i]-arr[i+1]
    }
    return rez
}