function order(words){
    if(!words) return ''
    let res = {}
    words = words.split(' ')
    for (let i = 1; i <= words.length; i++) {
        words.forEach(element => {
            if (element.includes(i)) {
                res[i] = element
            }
        });
    }
    return Object.values(res).join(' ')
}