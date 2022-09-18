function solve(word) {
    let count = 0
    for (let i = 0; i < word.length; i++) {
        console.log(word.charCodeAt(i))
        if (word.charCodeAt(i) < 123 && word.charCodeAt(i) > 96) {
            count++
        } else {
            count--
        }

    }
    return count <= 0 ? word.toUpperCase() : word.toLowerCase()
}