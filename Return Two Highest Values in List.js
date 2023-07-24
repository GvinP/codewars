function twoHighest(arr) {
    return [...new Set(arr)].sort((a,b)=>a-b).splice(-2).reverse();
}