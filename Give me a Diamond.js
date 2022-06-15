function diamond(n) {
    if (n < 1 || n % 2 === 0) return null
    if (n === 1) return '*\n'
    let diam = ''
    let i = 1
    let d = 1
    while (d < n) {
        d = 1 + (i - 1) * 2
        diam += ' '.repeat((n - d) / 2) + '*'.repeat(d) + '\n'
        i++
    }
    i -= 2
    while (d > 1) {
        d = 1 + (i - 1) * 2
        diam += ' '.repeat((n - d) / 2) + '*'.repeat(d) + '\n'
        i--
    }
    return diam;
}
