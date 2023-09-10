function scale(strng, k, n) {
    return strng ? strng.split('\n').map((w)=> new Array(n).fill(w.split('').map(l=> l.repeat(k)).join('')).join('\n')).join('\n'):'';
}