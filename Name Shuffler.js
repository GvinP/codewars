function nameShuffler(str){
    let res = str.split(' ')
    res = [res[1], res[0]]
    return res.join(' ')
}