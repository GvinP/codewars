function minValue(values){
    return +Object.values(values.reduce((acc,el)=>{
        if(acc[el]!==undefined) {
            return acc
        } else {
            acc[el] = el
            return acc
        }
    },{})).sort((a,b)=>a-b).join('')
}