function abbrevName(name){
    const res = name.toLowerCase().split(' ')
    return res[0][0].toUpperCase() + '.' + res[1][0].toUpperCase()
}