function expressionMatter(a, b, c) {
    let rez = []
    rez.push(a*(b+c))
    rez.push(a*b*c)
    rez.push(a+b*c)
    rez.push((a+b)*c)
    rez.push(a+b+c)
    rez.sort((a,b) => b-a)
    return rez[0]
}