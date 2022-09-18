function duplicateCount(text){
    return Object.values(text.toLowerCase().split('').reduce((acc, el)=>{
        if(acc[el]===undefined) {
            acc[el]=1
        } else {
            acc[el]++
        }
        return acc
    },{})).reduce((acc,el)=>el>=2?acc+1:acc,0)
}