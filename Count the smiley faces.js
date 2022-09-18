function countSmileys(arr) {
    return arr.reduce((acc, el) => {
        if (el.length === 3 || el.length === 2) {
            if (el[0] === ':' || el[0] === ';') {
                if (el[1] === '-' || el[1] === '~' || el[1] === ')' || el[1] === 'D') {
                    if (el[el.length - 1] === ')' || el[el.length - 1] === 'D') {
                        acc++
                    }
                }
            }
        }
        return acc
    }, 0)
}