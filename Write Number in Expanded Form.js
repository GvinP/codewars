function expandedForm(num) {
    return num.toString().split('').reduce((acc,el,i,arr)=>{
        if(i===0) {
            return ''+el*10**(arr.length-i-1)
        }
        if(el!=='0') {
            return acc+' + '+el*10**(arr.length-i-1)
        }
        return acc
    },'')
}