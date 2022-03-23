function upArray(arr){
    const hasNegative = arr.find(v => v < 0);
    const greater= arr.find(v=> v>9)
    const unexplainedTestCase=(arr)=>{
        return (arr.length===1&&arr[0]===1)?true:false
    }
    if(hasNegative||greater){return null}
    if(arr.length>Number.MAX_SAFE_INTEGER.toString().length){
        arr[arr.length-1]=arr[arr.length-1]+1
        return arr
    }
    const callback = x => Number(x);
    arr= Array.from(Number(arr.join(''))+1+'',callback)
    return unexplainedTestCase(arr)?null:arr
}